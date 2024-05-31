---
title: Intune
sidebar_class_name: intune
hide_table_of_contents: true
custom_edit_url: null
pagination_next: null
pagination_prev: null
---
import { CommandsTable } from "@site/src/components/CommandsTable";
import { columns } from "@site/src/tableHome/columns.table";
import Icon from '/static/img/intune-header.svg';
import commands from '/static/commands.json';

# <Icon/> Intune

<CommandsTable
applyFilter = 'Intune'
columns={columns}
data={commands}
columnsToHide = {['category','command']}
/>
