export type TNodeAttributes = {
  nodeType: string;
}

export type TEdgeAttributes = {
  appId: string;
}

export type TInitialNode = {
  nodeId: string;
  nodeName: string;
  attributes: TNodeAttributes,
  isFinal: boolean;
}

export type TInitialEdge = {
  source: string;
  target: string;
  attributes: TEdgeAttributes,
}

export const nodes: TInitialNode[] = [
  {
    nodeId: "1",
    nodeName: "1",
    attributes: {
      nodeType: "app",
    },
    isFinal: true,
  },
  {
    nodeId: "2",
    nodeName: "2",
    attributes: {
      nodeType: "app",
    },
    isFinal: true,
  },
  {
    nodeId: "3",
    nodeName: "3",
    attributes: {
      nodeType: "qvd",
    },
    isFinal: false,
  },
  {
    nodeId: "5",
    nodeName: "5",
    attributes: {
      nodeType: "qvd",
    },
    isFinal: false,
  },
  {
    nodeId: "4",
    nodeName: "4",
    attributes: {
      nodeType: "qvd",
    },
    isFinal: false,
  },
  {
    nodeId: "6",
    nodeName: "6",
    attributes: {
      nodeType: "xlsx",
    },
    isFinal: false,
  },
  {
    nodeId: "7",
    nodeName: "7",
    attributes: {
      nodeType: "postgresBD",
    },
    isFinal: false,
  },
  {
    nodeId: "8",
    nodeName: "8",
    attributes: {
      nodeType: "qvd",
    },
    isFinal: false,
  },
  {
    nodeId: "9",
    nodeName: "9",
    attributes: {
      nodeType: "qvd",
    },
    isFinal: false,
  },
  {
    nodeId: "10",
    nodeName: "10",
    attributes: {
      nodeType: "xlsx",
    },
    isFinal: false,
  },
  {
    nodeId: "11",
    nodeName: "11",
    attributes: {
      nodeType: "postgresBD",
    },
    isFinal: false,
  },
  {
    nodeId: "12",
    nodeName: "12",
    attributes: {
      nodeType: "postgresBD",
    },
    isFinal: false,
  },
  {
    nodeId: "13",
    nodeName: "13",
    attributes: {
      nodeType: "xlsx",
    },
    isFinal: false,
  },
  {
    nodeId: "14",
    nodeName: "14",
    attributes: {
      nodeType: "postgresBD",
    },
    isFinal: false,
  },
  {
    nodeId: "15",
    nodeName: "15",
    attributes: {
      nodeType: "postgresBD",
    },
    isFinal: false,
  },
  {
    nodeId: "16",
    nodeName: "16",
    attributes: {
      nodeType: "postgresBD",
    },
    isFinal: false,
  },
  {
    nodeId: "17",
    nodeName: "17",
    attributes: {
      nodeType: "postgresBD",
    },
    isFinal: false,
  },
  {
    nodeId: "18",
    nodeName: "18",
    attributes: {
      nodeType: "postgresBD",
    },
    isFinal: false,
  },
  {
    nodeId: "19",
    nodeName: "19",
    attributes: {
      nodeType: "postgresBD",
    },
    isFinal: false,
  },
  {
    nodeId: "5001",
    nodeName: "5001",
    attributes: {
      nodeType: "app",
    },
    isFinal: true,
  },
  {
    nodeId: "5002",
    nodeName: "5002",
    attributes: {
      nodeType: "qvd",
    },
    isFinal: false,
  },
  {
    nodeId: "5003",
    nodeName: "5003",
    attributes: {
      nodeType: "postgresBD",
    },
    isFinal: false,
  },
  {
    nodeId: "xxx",
    nodeName: "x",
    attributes: {
      nodeType: "app",
    },
    isFinal: true,
  }, {
    nodeId: "yyy",
    nodeName: "y",
    attributes: {
      nodeType: "postgresBD",
    },
    isFinal: false,
  }, {
    nodeId: "zzz",
    nodeName: "z",
    attributes: {
      nodeType: "app",
    },
    isFinal: false,
  },
];

export const edges: TInitialEdge[] = [
  {
    source: "zzz",
    target: "yyy",
    attributes: {
      appId: "url"
    }
  },
  {
    source: "yyy",
    target: "xxx",
    attributes: {
      appId: "url"
    }
  },
  {
    source: "3",
    target: "1",
    attributes: {
      appId: "url"
    }
  },
  {
    source: "4",
    target: "1",
    attributes: {
      appId: "url"
    }
  },
  {
    source: "4",
    target: "2",
    attributes: {
      appId: "url"
    }
  },
  {
    source: "5",
    target: "2",
    attributes: {
      appId: "url"
    }
  },
  {
    source: "4",
    target: "4",
    attributes: {
      appId: "url"
    }
  },
  {
    source: "4",
    target: "3",
    attributes: {
      appId: "url"
    }
  },
  {
    source: "5",
    target: "3",
    attributes: {
      appId: "url"
    }
  },
  {
    source: "6",
    target: "5",
    attributes: {
      appId: "url"
    }
  },
  {
    source: "6",
    target: "4",
    attributes: {
      appId: "url"
    }
  },
  {
    source: "6",
    target: "3",
    attributes: {
      appId: "url"
    }
  },
  {
    source: "7",
    target: "5",
    attributes: {
      appId: "url"
    }
  },
  {
    source: "7",
    target: "3",
    attributes: {
      appId: "url"
    }
  },
  {
    source: "11",
    target: "6",
    attributes: {
      appId: "url"
    }
  },
  {
    source: "10",
    target: "6",
    attributes: {
      appId: "url"
    }
  },
  {
    source: "9",
    target: "7",
    attributes: {
      appId: "url"
    }
  },
  {
    source: "9",
    target: "13",
    attributes: {
      appId: "url"
    }
  },
  {
    source: "13",
    target: "14",
    attributes: {
      appId: "url"
    }
  },
  {
    source: "13",
    target: "15",
    attributes: {
      appId: "url"
    }
  },
  {
    source: "3",
    target: "17",
    attributes: {
      appId: "dfdsf"
    }
  },
  {
    source: "16",
    target: "17",
    attributes: {
      appId: "url"
    }
  },
  {
    source: "17",
    target: "16",
    attributes: {
      appId: "url"
    }
  },
  {
    source: "10",
    target: "16",
    attributes: {
      appId: "url"
    }
  },
  {
    source: "8",
    target: "7",
    attributes: {
      appId: "url"
    }
  },
  {
    source: "14",
    target: "8",
    attributes: {
      appId: "url"
    }
  },
  {
    source: "8",
    target: "14",
    attributes: {
      appId: "url"
    }
  },
  {
    source: "14",
    target: "13",
    attributes: {
      appId: "url"
    }
  },
  {
    source: "8",
    target: "12",
    attributes: {
      appId: "url"
    }
  },
  {
    source: "18",
    target: "8",
    attributes: {
      appId: "url"
    }
  },
  {
    source: "19",
    target: "8",
    attributes: {
      appId: "url"
    }
  },
  {
    source: "5003",
    target: "5002",
    attributes: {
      appId: "url"
    }
  },
  {
    source: "5002",
    target: "5001",
    attributes: {
      appId: "url"
    }
  }
];