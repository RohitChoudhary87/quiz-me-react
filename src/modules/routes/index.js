import React from 'react';
import { InviteList, InviteCandidate } from '../../containers';

export default [
  {
    name: 'Invite List',
    path: '/invite-list',
    component: props => <InviteList />
  },
  {
    name: 'Invite Candidate',
    path: '/invite-candidate',
    component: () => <InviteCandidate />
  }
];
