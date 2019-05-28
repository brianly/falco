import { PersistState } from 'redux-persist/es/types';

export const state = {
  lead: {
    leadSubmission: null,
  },
  login: {
    isAuthenticated: false,
    loginError: 'some login error message',
    isSubmitting: false,
    _persist: {} as PersistState
  },
  parameters: {
    currentAuditParametersId: null,
    currentPageId: null,
    currentScriptId: null,
    currentScriptStepId: null,
    displayedMetrics: {},
    _persist: {} as PersistState
  },
  projects: {
    byId: null,
  },
  auditResults: {
    byAuditId: {},
    sortedByPageId: {},
    sortedByScriptId: {},
  },
  user: null,
};
