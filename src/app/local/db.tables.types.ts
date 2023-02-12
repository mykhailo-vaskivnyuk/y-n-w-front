/* eslint-disable max-lines */
export const TABLES_MAP = {
  NODES: 'nodes',
  NETS: 'nets',
  USERS: 'users',
  NETS_DATA: 'nets_data',
  MEMBERS: 'members',
  NODES_INVITES: 'nodes_invites',
  EVENTS: 'events',
  BOARD_MESSAGES: 'board_messages',
  USERS_CHANGES: 'users_changes',
  USERS_TOKENS: 'users_tokens',
  USERS_MEMBERS: 'users_members',
  SESSIONS: 'sessions',
};

export type OuterJoin<T> =
  | { [key in keyof T]: T[key] }
  | { [key in keyof T]: null };

export type ITableNodes = {
  node_id: number;
  node_level: number;
  node_position: number;
  parent_node_id: number | null;
  net_id: number;
  count_of_members: number;
  updated: string;
}

export type ITableNets = {
  net_id: number;
  net_level: number;
  parent_net_id: number | null;
  first_net_id: number | null;
  count_of_nets: number;
}

export type ITableUsers = {
  user_id: number;
  email: string;
  name: string | null;
  mobile: string | null;
  password: string | null;
  confirmed: boolean;
}

export type ITableNetsData = {
  net_id: number;
  name: string;
  goal: string | null;
  resource_name: string | null;
  resource_link: string | null;
}

export type ITableMembers = {
  member_id: number;
  node_id: number;
  net_id: number;
  user_id: number;
  email_show: boolean;
  name_show: boolean;
  mobile_show: boolean;
  confirmed: boolean;
}

export type ITableUsersNodesInvites = {
  parent_node_id: number;
  user_id: number;
  member_name: string;
  token: string;
}

export type ITableEvents = {
  event_id: number;
  user_id: number;
  user_node_id: number | null;
  net_view: 'net' | 'tree' | 'circle'; /* NetViewKeys */
  member_node_id: number | null;
  message: string;
  date: string;
}

export type ITableBoardMessages = {
  message_id: number;
  net_id: number;
  user_id: number;
  node_id: number;
  net_view: 'net' | 'tree' | 'circle'; /* NetViewKeys */
  message: string;
  date: string;
}

export type ITableUsersChanges = {
  user_id: number;
  date: string;
}

export type ITableUsersTokens = {
  user_id: number;
  token: string;
}

export type ITableUsersMembers = {
  parent_node_id: number;
  user_id: number;
  member_id: number;
  dislike: boolean;
  vote: boolean;
}

export type ITableSessions = {
  session_id: number;
  user_id: number;
  session_key: string;
  session_value: string;
  updated: string;
}
