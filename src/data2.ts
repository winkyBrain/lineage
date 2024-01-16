import { TInitialNode, TInitialEdge } from './data';

export const testNodes: TInitialNode[] = [
  {
    nodeId: '9276b51a-4e7f-49a4-9d07-aa75702dd9bc',
    nodeName: 'VOLTE & VOWIFI',
    attributes: {
      type: 'app',
      size: '300mb',
    },
    isFinal: true,
  },
  {
    nodeId: 'EYE_OF_SAURON\\VOLTE-VOWIFI\\VOWIFI_TRAFFIC_MONTHLY_V3.QVD',
    nodeName: 'EYE_OF_SAURON\\VOLTE-VOWIFI\\VOWIFI_TRAFFIC_MONTHLY_V3.QVD',
    attributes: {
      type: 'qvd',
      size: '500mb',
    },
    isFinal: false,
  },
  {
    nodeId: 'EYE_OF_SAURON\\VOLTE-VOWIFI\\VOLTE_DAILY.QVD',
    nodeName: 'EYE_OF_SAURON\\VOLTE-VOWIFI\\VOLTE_DAILY.QVD',
    attributes: {
      type: 'qvd',
      size: '900mb',
    },
    isFinal: false,
  },
  {
    nodeId: 'EYE_OF_SAURON\\VOLTE-VOWIFI\\SOC_VOLTE3_COUNT.QVD',
    nodeName: 'EYE_OF_SAURON\\VOLTE-VOWIFI\\SOC_VOLTE3_COUNT.QVD',
    attributes: {
      type: 'qvd',
      size: '400mb',
    },
    isFinal: false,
  },
  {
    nodeId: '\\\\MS-QSSRC001\\COMMON\\VOLTE\\QLIK_ФИЛИАЛЫ\\ФИЛИАЛЫ АКТУАЛЬНЫЙ_3.5.XLSX',
    nodeName: '\\\\MS-QSSRC001\\COMMON\\VOLTE\\QLIK_ФИЛИАЛЫ\\ФИЛИАЛЫ АКТУАЛЬНЫЙ_3.5.XLSX',
    attributes: {
      type: 'xlsx',
      size: '30mb',
    },
    isFinal: false,
  },
  {
    nodeId: 'cm_datamarts.stg_device_changed',
    nodeName: 'cm_datamarts.stg_device_changed',
    attributes: {
      type: 'table',
      size: '-',
      dbName: 'hive',
    },
    isFinal: false,
  },
  {
    nodeId: 'customer360.stg_device_changed',
    nodeName: 'customer360.stg_device_changed',
    attributes: {
      type: 'table',
      size: '-',
      dbName: 'hive',
    },
    isFinal: false,
  },
  {
    nodeId: 'biis_fct.fct_usage_prep_cha_n_pub',
    nodeName: 'biis_fct.fct_usage_prep_cha_n_pub',
    attributes: {
      type: 'table',
      size: '-',
      dbName: 'hive',
    },
    isFinal: false,
  },
  {
    nodeId: 'EYE_OF_SAURON\\DIMENSIONS\\DIM_ACCOUNT_TYPE.QVD',
    nodeName: 'EYE_OF_SAURON\\DIMENSIONS\\DIM_ACCOUNT_TYPE.QVD',
    attributes: {
      type: 'qvd',
      size: '124mb',
    },
    isFinal: false,
  },
];

export const testEdges: TInitialEdge[] = [
  {
    source: 'EYE_OF_SAURON\\VOLTE-VOWIFI\\VOWIFI_TRAFFIC_MONTHLY_V3.QVD',
    target: '9276b51a-4e7f-49a4-9d07-aa75702dd9bc',
    attributes: {
      appLoader: '9276b51a-4e7f-49a4-9d07-aa75702dd9bc',
      appLoaderName: 'KJFKJSOIF'
    },
  },
  {
    source: 'EYE_OF_SAURON\\VOLTE-VOWIFI\\VOLTE_DAILY.QVD',
    target: '9276b51a-4e7f-49a4-9d07-aa75702dd9bc',
    attributes: {
      appLoader: '9276b51a-4e7f-49a4-9d07-aa75702dd9bc',
      appLoaderName: 'KJFKJSOIF'
    },
  },
  {
    source: '\\\\MS-QSSRC001\\COMMON\\VOLTE\\QLIK_ФИЛИАЛЫ\\ФИЛИАЛЫ АКТУАЛЬНЫЙ_3.5.XLSX',
    target: '9276b51a-4e7f-49a4-9d07-aa75702dd9bc',
    attributes: {
      appLoader: '9276b51a-4e7f-49a4-9d07-aa75702dd9bc',
      appLoaderName: 'KJFKJSOIF'
    },
  },
  {
    source: 'biis_fct.fct_usage_prep_cha_n_pub',
    target: '9276b51a-4e7f-49a4-9d07-aa75702dd9bc',
    attributes: {
      appLoader: '9276b51a-4e7f-49a4-9d07-aa75702dd9bc',
      appLoaderName: 'KJFKJSOIF'
    },
  },
  {
    source: 'EYE_OF_SAURON\\VOLTE-VOWIFI\\SOC_VOLTE3_COUNT.QVD',
    target: 'EYE_OF_SAURON\\VOLTE-VOWIFI\\VOLTE_DAILY.QVD',
    attributes: {
      appLoader: 'dsfsdf-435sdf-w435',
      appLoaderName: 'KJFKJSOIF'
    },
  },
  {
    source: 'biis_fct.fct_usage_prep_cha_n_pub',
    target: 'EYE_OF_SAURON\\VOLTE-VOWIFI\\VOLTE_DAILY.QVD',
    attributes: {
      appLoader: 'dsfsdf-435sdf-w435',
      appLoaderName: 'KJFKJSOIF'
    },
  },
  {
    source: 'EYE_OF_SAURON\\VOLTE-VOWIFI\\VOLTE_DAILY.QVD',
    target: 'EYE_OF_SAURON\\VOLTE-VOWIFI\\VOLTE_DAILY.QVD',
    attributes: {
      appLoader: 'dsfsdf-456gfr23',
      appLoaderName: 'KJFKJSOIF'
    },
  },
  {
    source: 'customer360.stg_device_changed',
    target: 'EYE_OF_SAURON\\VOLTE-VOWIFI\\VOLTE_DAILY.QVD',
    attributes: {
      appLoader: '657fgh546efg',
      appLoaderName: 'KJFKJSOIF'
    },
  },
  {
    source: 'customer360.stg_device_changed',
    target: 'EYE_OF_SAURON\\VOLTE-VOWIFI\\VOWIFI_TRAFFIC_MONTHLY_V3.QVD',
    attributes: {
      appLoader: '4353465erfg456',
      appLoaderName: 'KJFKJSOIF'
    },
  },
  {
    source: 'cm_datamarts.stg_device_changed',
    target: 'EYE_OF_SAURON\\VOLTE-VOWIFI\\VOWIFI_TRAFFIC_MONTHLY_V3.QVD',
    attributes: {
      appLoader: '4353465erfg456',
      appLoaderName: 'KJFKJSOIF'
    },
  },
  {
    source: 'EYE_OF_SAURON\\VOLTE-VOWIFI\\VOLTE_DAILY.QVD',
    target: 'EYE_OF_SAURON\\DIMENSIONS\\DIM_ACCOUNT_TYPE.QVD',
    attributes: {
      appLoader: 'dsfsdf-2342347fr23',
      appLoaderName: 'KJFKJSOIF'
    },
  },
  {
    source: 'biis_fct.fct_usage_prep_cha_n_pub',
    target: 'EYE_OF_SAURON\\VOLTE-VOWIFI\\SOC_VOLTE3_COUNT.QVD',
    attributes: {
      appLoader: 'dsfsdf-435sdf-w435',
      appLoaderName: 'KJFKJSOIF'
    },
  },
];