import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  Selection,
  ChipProps,
  SortDescriptor,
} from '@nextui-org/react';
import React, { useEffect, useState, useCallback, useMemo } from 'react';

import { ChevronDownIcon } from '../components/preinscriptions/ChevronDownIcon';

import { columns2 } from '../components/payments/data';

import { capitalize } from '../components/preinscriptions/utils';

import { getPayments, updatePayment } from '../services/api';
import { ConvertedPayment, Payment } from '../models/Payment';

const INITIAL_VISIBLE_COLUMNS = columns2.map((column) => column.uid);

export default function Payments() {
  const [payments, setPayments] = useState<ConvertedPayment[]>([]);
  const [filterValue, setFilterValue] = useState('');
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]));
  const [visibleColumns, setVisibleColumns] = useState<Selection>(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const data = await getPayments();
        setPayments(data);
        console.log('Payments:', payments);
      } catch (error) {
        console.error('Error fetching payments:', error);
      }
    };
    fetchPayments();
  }, []);

  const [selectedCategories, setSelectedCategories] = useState<Selection>(
    new Set([])
  );
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: 'id',
    direction: 'ascending',
  });
  const [page, setPage] = useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const handleAccept = async (id: any) => {
    try {
      // Actualización del estado local después de que la API haya respondido
      setPayments((prevPayments) =>
        prevPayments.map((payment) =>
          payment.id === id ? { ...payment, estado: 'Aprobado' } : payment
        )
      );
      // Llamada a la API para actualizar el estado del usuario
      await updatePayment(id, { status: 'Aprobado' });
    } catch (error) {
      console.error('Error updating payment status:', error);
    }
  };

  const handleReject = async (id: any) => {
    try {
      // Actualización del estado local después de que la API haya respondido
      setPayments((prevPayments) =>
        prevPayments.map((payment) =>
          payment.id === id ? { ...payment, estado: 'Rechazado' } : payment
        )
      );
      // Llamada a la API para actualizar el estado del usuario
      await updatePayment(id, { status: 'Rechazado' });
    } catch (error) {
      console.error('Error updating payment status:', error);
    }
  };

  const statusColorMap: Record<string, ChipProps['color']> = {
    Pendiente: 'warning',
    Aprobado: 'success',
    Rechazado: 'danger',
  };

  const renderCell = useCallback(
    (pago: Payment, columnKey: React.Key) => {
      let cellValue = pago[columnKey as keyof Payment];

      // Convert Date to string
      if (cellValue instanceof Date) {
        cellValue = cellValue.toLocaleDateString();
      }

      switch (columnKey) {
        case 'status':
          return (
            <Chip color={statusColorMap[pago.status]} size="sm" variant="flat">
              {pago.status}
            </Chip>
          );
        case 'actions':
          return (
            <div className="relative flex justify-center items-center gap-2">
              <Button
                isIconOnly
                size="sm"
                color="success"
                variant="light"
                onPress={() => handleAccept(pago.id)}
              >
                ✓
              </Button>
              <Button
                isIconOnly
                size="sm"
                color="danger"
                variant="light"
                onPress={() => handleReject(pago.id)}
              >
                ✕
              </Button>
            </div>
          );
        case 'preview':
          return (
            <a
              href="#"
              className="text-blue-500 underline"
              onClick={() => {
                setSelectedImage('/images/comprobante.jpg'); // Ruta relativa a la imagen en la carpeta public
                setModalVisible(true);
              }}
            >
              Ver Pago
            </a>
          );
        default:
          return cellValue as React.ReactNode;
      }
    },
    [statusColorMap]
  );

  const onNextPage = useCallback(() => {
    if (page < page) {
      setPage(page + 1);
    }
  }, [page, page]);

  const onPreviousPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    },
    []
  );

}
