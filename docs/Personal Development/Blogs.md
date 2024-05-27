---
title: 🧲 Blogs
sidebar_class_name: blogs
hide_table_of_contents: true
custom_edit_url: null
pagination_next: null
pagination_prev: null
---

import { CommandsTable } from "@site/src/components/CommandsTable";
import { commands } from "@site/src/tableHome/commands.table";
import { columns } from "@site/src/tableHome/columns.table";
import Icon from '/static/img/m365-header.svg';

#  🧲 Blogs

<CommandsTable
applyFilter = 'Blogs'
columns={columns}
data={commands}
columnsToHide = {['category','command']}
/>