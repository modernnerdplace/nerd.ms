---
title: Entra
hide_table_of_contents: true
sidebar_class_name: entraid
custom_edit_url: null
pagination_next: null
pagination_prev: null
---

import { CommandsTable } from "@site/src/components/CommandsTable";
import { columns } from "@site/src/tableHome/columns.table";
import Icon from '/static/img/entraid-header.svg';
import commands from '/static/commands.json';

# <Icon/> Entra

<CommandsTable
applyFilter = 'Entra'
columns={columns}
data={commands}
columnsToHide = {['category','command']}
/>
