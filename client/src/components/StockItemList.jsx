import React, { Component } from "react";
import {
  StructuredListWrapper,
  StructuredListRow,
  StructuredListCell,
  StructuredListHead,
  StructuredListBody,
  StructuredListInput,
  Icon
} from "carbon-components-react";
import { iconCheckmarkSolid } from "carbon-icons";

import Header from "../pattern-components/Header";
import "../pattern-components/patterns.scss";

class StockItemList extends Component {

    async componentDidMount() {
      this.setState({
        data: await this.props.stockService.listStockItems()
      });
    }

    title = 'Stock Items';
    subtitle = 'This is the current inventory of items';
    columns = [
      "name",
      "description",
      "stock",
      "unitPrice",
      "picture",
      "manufacturer",
    ];
    formatters = {};
    data = [
      {
        "name": "Item 1",
        "description": "The first item",
        "stock": 10,
        "unitPrice": 100.0,
        "picture": "test",
        "manufacturer": "unknown",
      },
      {
        "name": "Item 2",
        "description": "The second item",
        "stock": 15,
        "unitPrice": 120.5,
        "picture": "test1",
        "manufacturer": "Apple",
      },
      {
        "name": "Item 3",
        "description": "The third item",
        "stock": 20,
        "unitPrice": 75.5,
        "picture": "test1",
        "manufacturer": "Sony",
      }
    ];
}

export default StockItemList;