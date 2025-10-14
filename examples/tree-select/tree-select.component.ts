import { Component } from '@angular/core';
import data from './data.json';
import { FormsModule } from '@angular/forms';
import { TreeSelect } from 'primeng/treeselect';

@Component({
    selector: 'tree-select-demo',
    templateUrl: './tree-select-demo.html',
    standalone: true,
    imports: [FormsModule, TreeSelect]
  })
export class TreeSelectDemo {
    nodes = data;

    selectedNodes: any;

    value1: any;
    value2: any;
    value3: any;

}