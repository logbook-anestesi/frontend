import { Button, Flex, Image, Text, useDisclosure } from '@chakra-ui/react';
import { CaseMenu } from '../../types';
import { Case } from '../../hooks/useGetCases/types'; // Assuming 'Case' type is defined here
import TableData from '../TableData';
import filterIcon from '../../assets/filter.png';
import ModalFilter from '../ModalFilter';
import { colors } from '../../../../constants/colors';
import { useState } from 'react';

interface Props {
  caseList: Case[] | undefined;
  selectedCase: CaseMenu;
  setFinalCaseList: React.Dispatch<React.SetStateAction<Case[] | undefined>>;
  handleResetData: () => void;
}

const CaseListSection = ({
  caseList,
  selectedCase,
  setFinalCaseList,
  handleResetData,
}: Props) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [showResetFilter, setResetShowFilter] = useState(false);

  const handleResetFilter = () => {
    setResetShowFilter(false);
    handleResetData();
  };

  /**
   * Helper function to extract relevant string from an array of objects for CSV.
   * It now specifically looks for properties ending with 'Name', with special handling for 'operationTypes',
   * and falls back to 'Id' or JSON.stringify.
   * @param arr The array of objects to format.
   * @param headerName The name of the header corresponding to this array (e.g., 'operationTypes').
   * @returns A string of formatted values joined by newlines.
   */
  const formatObjectArrayForCsv = (
    arr: any[] | undefined,
    headerName: string,
  ) => {
    if (!arr || arr.length === 0) {
      return '';
    }

    const formattedItems = arr.map((item: any) => {
      if (typeof item !== 'object' || item === null) {
        return String(item); // Fallback for non-object items in the array (shouldn't happen much for this data)
      }

      let desiredValue = '';

      // Special handling for operationTypes: explicitly use 'operationTypeName'
      if (headerName === 'operationTypes' && item.operationTypeName) {
        desiredValue = item.operationTypeName;
      } else {
        // General logic: find the first key that ends with 'Name'
        const nameKey = Object.keys(item).find((key) => key.endsWith('Name'));
        if (nameKey && item[nameKey] !== undefined && item[nameKey] !== null) {
          desiredValue = String(item[nameKey]);
        } else {
          // Fallback if no 'xxxName' found: look for 'xxxId'
          const idKey = Object.keys(item).find((key) => key.endsWith('Id'));
          if (idKey && item[idKey] !== undefined && item[idKey] !== null) {
            desiredValue = String(item[idKey]);
          } else {
            // Last resort: stringify the entire object
            // desiredValue = JSON.stringify(item);
            ('');
          }
        }
      }
      return desiredValue;
    });

    // Join with newline character for CSV, which will be enclosed in quotes by the main logic.
    return formattedItems.join(';');
  };

  const handleExportCases = () => {
    if (!caseList || caseList.length === 0) {
      alert('No data to export.');
      return;
    }

    // Determine all unique headers from all cases to ensure all columns are included
    const allKeys = new Set<string>();
    caseList.forEach((caseItem) => {
      Object.keys(caseItem).forEach((key) => allKeys.add(key));
    });
    const headers = Array.from(allKeys); // Convert set to array for consistent order

    // Map case objects to CSV rows
    const csvRows = caseList.map((caseItem) => {
      return headers
        .map((header) => {
          const value = (caseItem as any)[header]; // Access value dynamically

          if (
            Array.isArray(value) &&
            value.length > 0 &&
            typeof value[0] === 'object' &&
            value[0] !== null
          ) {
            // If it's an array of objects (like asaTags, tags, operationTypes, etc.)
            // Pass the header name to formatObjectArrayForCsv for specific logic
            return formatObjectArrayForCsv(value, header);
          } else if (typeof value === 'object' && value !== null) {
            // If it's a single object that's not an array, stringify it
            return JSON.stringify(value);
          } else if (typeof value === 'boolean') {
            return value ? 'TRUE' : 'FALSE'; // Convert booleans to strings
          } else if (value === null || value === undefined) {
            return ''; // Represent null/undefined as empty string in CSV
          }

          // Handle values that might contain commas, newlines, or double quotes for standard CSV
          const stringValue = String(value);
          if (
            stringValue.includes(',') ||
            stringValue.includes('\n') || // Check for newlines
            stringValue.includes('"')
          ) {
            return `"${stringValue.replace(/"/g, '""')}"`; // Escape double quotes and wrap in quotes
          }
          return stringValue;
        })
        .join(',');
    });

    const csvHeaderRow = headers
      .map((header) => {
        // Basic capitalization for headers if desired, or just return as is
        // Enclose headers in quotes to handle spaces or special characters if needed
        return `"${header.charAt(0).toUpperCase() + header.slice(1)}"`;
      })
      .join(',');

    const csvContent = [csvHeaderRow, ...csvRows].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', 'cases.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert('Your browser does not support downloading files directly.');
    }
  };

  return (
    <Flex direction="column" mt={5} gap={3}>
      <Flex justify="space-between" align="center" alignItems="center">
        {selectedCase.value === '-' ? (
          <Text as="b" fontSize="md">
            Daftar Seluruh Kasus
          </Text>
        ) : (
          <Text as="b" fontSize="xl" mb={3}>
            Daftar Cases {selectedCase.title}
          </Text>
        )}

        <Flex align="center" gap={2}>
          <Button colorScheme="teal" size="xs" onClick={handleExportCases}>
            Export All
          </Button>
        </Flex>
        <Flex align="center" gap={2} onClick={onOpen}>
          <Image src={filterIcon} w={3} h={3} />
          <Text fontSize="sm">Filter</Text>
        </Flex>
      </Flex>

      {showResetFilter && (
        <Flex justify="end">
          <Text
            fontSize="sm"
            align="center"
            bgColor={colors.lightPurple}
            color="white"
            w="100px"
            rounded="xl"
            onClick={handleResetFilter}
          >
            Reset Filter
          </Text>
        </Flex>
      )}

      <TableData caseList={caseList} />

      <ModalFilter
        closeModal={onClose}
        handleSubmit={async () => {}}
        isOpen={isOpen}
        setFinalCaseList={setFinalCaseList}
        setResetShowFilter={setResetShowFilter}
      />
    </Flex>
  );
};

export default CaseListSection;
