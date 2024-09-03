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

import { getPayments, } from '../services/api';


function Payments() {
  return <div>Payments</div>;
}

export default Payments;
