---
title: 🥷 Ninja Training
sidebar_class_name: Learn
hide_table_of_contents: true
custom_edit_url: null
pagination_next: null
pagination_prev: null
---

import { CommandsTable } from "@site/src/components/CommandsTable";
import { commands } from "@site/src/tableHome/commands.table";
import { columns } from "@site/src/tableHome/columns.table";
import Icon from '/static/img/m365-header.svg';

# 🥷 Microsoft Ninja Training

<CommandsTable
applyFilter = 'Ninja'
columns={columns}
data={commands}
columnsToHide = {['category','command']}
/>
