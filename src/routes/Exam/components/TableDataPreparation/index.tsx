import { useMemo } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { colors } from '../../../../constants/colors';
import { convertDateForExam } from '../../../../helpers';
import { Badge } from '@chakra-ui/react';
import { ExamPreparation } from '../../hooks/useGetAllExamPreparation/types';

interface DataRow {
  idx: number;
  type: string;
  procedure: string | '';
  reason: string | '';
  approvalLocation: string | '';
  approvalDifficulty: string | '';
  approvalDate: string;
  approvalSupervision: string | '';
  preparationDate: string | '';
  selfEvaluation: string | '';
  isGoingWell: string | '';
  selfReflection: string | '';
  approvalGlobalRating: string | '';
  approvalFeedbackGiven: string | '';
  operationTypes: any[];
  additionalTags: any[];
  accessor: string;
  status: string;
  createdDate: string;
}

interface Props {
  examPrepList: ExamPreparation[];
}

const TableDataPreparation = ({ examPrepList }: Props) => {
  const getTickerType = (status: string) => {
    if (status === 'APPROVED') {
      return 'green';
    }
    if (status === 'PENDING') {
      return 'purple';
    }
    if (status === 'REJECTED') {
      return 'red';
    }

    return '';
  };
  const columns: TableColumn<DataRow>[] = [
    {
      name: 'No',
      selector: (row) => row.idx,
      sortable: true,
      width: '65px',
    },
    {
      name: 'Status',
      selector: (row) => row.status,
      sortable: true,
      cell: (row) => (
        <Badge colorScheme={getTickerType(row.status)}>{row.status}</Badge>
      ),
    },
    {
      name: 'Tipe',
      selector: (row) => row.type,
      sortable: true,
      wrap: true,
      width: '100px',
    },
    {
      name: 'Prosedur',
      selector: (row) => row.procedure,
      sortable: true,
      wrap: true,
      width: '150px',
    },
    {
      name: 'Komentar',
      selector: (row) => row.reason,
      sortable: true,
      wrap: true,
      width: '150px',
    },
    {
      name: 'Lokasi',
      selector: (row) => row.approvalLocation,
      sortable: true,
      wrap: true,
      width: '150px',
    },
    {
      name: 'Kesulitan',
      selector: (row) => row.approvalDifficulty,
      sortable: true,
      wrap: true,
      width: '150px',
    },
    {
      name: 'Supervisi',
      selector: (row) => row.approvalSupervision,
      sortable: true,
      wrap: true,
      width: '150px',
    },
    {
      name: 'Self Evaluation',
      selector: (row) => row.selfEvaluation,
      sortable: true,
      wrap: true,
      width: '150px',
    },
    {
      name: 'Berjalan Dengan Baik',
      selector: (row) => row.isGoingWell,
      sortable: true,
      cell: (row) => (row.isGoingWell === 'Yes' ? 'Ya' : 'Tidak'),
      wrap: true,
      width: '150px',
    },
    {
      name: 'Refleksi Pribadi',
      selector: (row) => row.selfReflection,
      sortable: true,
      wrap: true,
      width: '150px',
    },
    {
      name: 'Tipe Operasi',
      selector: (row) =>
        row.operationTypes
          .map((operation) => operation.operationTypeName)
          .join(', '),
      sortable: true,
      wrap: true,
      width: '150px',
    },
    {
      name: 'Rating',
      selector: (row) => row.approvalGlobalRating,
      sortable: true,
      wrap: true,
      width: '150px',
    },
    {
      name: 'Penguji',
      selector: (row) => row.accessor,
      sortable: true,
      wrap: true,
      width: '150px',
    },
    {
      name: 'Tanggal Pembuatan',
      selector: (row) => row.createdDate,
      sortable: true,
      wrap: true,
      width: '150px',
    },
    {
      name: 'Approval Date',
      selector: (row) => row.approvalDate,
      sortable: true,
      wrap: true,
      width: '150px',
    },
  ];
  const data = useMemo(() => {
    return examPrepList
      ?.sort(
        (a, b) =>
          new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime(),
      )
      ?.map((exam, idx) => {
        return {
          idx: idx + 1,
          type: exam.type || '',
          procedure: exam.procedure || '',
          reason: exam.reason || '',
          approvalLocation: exam.approvalLocation || '',
          approvalDifficulty: exam.approvalDifficulty || '',
          approvalDate:
            exam.approvalStatus === 'PENDING'
              ? '-'
              : convertDateForExam(exam.approvalConfirmDate),
          approvalSupervision: exam.approvalSupervision || '',
          preparationDate: convertDateForExam(exam.preparationDate) || '',
          selfEvaluation: exam.selfEvaluation || '',
          isGoingWell: exam.isGoingWell ? 'Yes' : 'No',
          selfReflection: exam.selfReflection || '',
          approvalGlobalRating: exam.approvalGlobalRating || '',
          approvalFeedbackGiven: exam.approvalFeedbackGiven || '',
          operationTypes: exam.operationTypes || [],
          additionalTags: exam.additionalTags || [],
          accessor: exam.assessorName || '',
          status: exam.approvalStatus || '',
          createdDate: convertDateForExam(exam.createdDate),
        };
      });
  }, [examPrepList]);

  const customStyles = {
    headCells: {
      style: {
        color: colors.primaryPurple,
        fontWeight: 'bold',
      },
    },
    rows: {
      style: {
        width: '800px',
      },
    },
  };

  return (
    <DataTable
      columns={columns}
      data={data}
      pagination
      customStyles={customStyles}
    />
  );
};

export default TableDataPreparation;
