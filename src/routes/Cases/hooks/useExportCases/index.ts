'use client';
import axiosClient from '../../../../networks/apiClient';

const useExportCases = () => {
  const exportCases = async () => {
    try {
      const response = await axiosClient.get('/cases/export', {
        responseType: 'blob',
      });
      const blob = new Blob([response.data], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'cases.csv');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error exporting cases:', error);
      throw error;
    }
  };

  return {
    exportCases,
  };
};

export default useExportCases;
