---
title: Defender
sidebar_class_name: defender
hide_table_of_contents: true
custom_edit_url: null
pagination_next: null
pagination_prev: null
---

import { CommandsTable } from "@site/src/components/CommandsTable";
import { columns } from "@site/src/tableHome/columns.table";
import Icon from '/static/img/defender-header.svg';
import commands from '/static/commands.json';

# <Icon/> Defender

<CommandsTable
applyFilter = 'Defender'
columns={columns}
data={commands}
columnsToHide = {['category','command']}
/>
