import { ActionType } from '../action-types/index'
import { Action } from '../actions/index'

interface RepositoriesState {
  loading: boolean
  error: string | null
  data: string[]
}

const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
  if (action.type === 'search_repositories') {
  }
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      // click search button
      return { loading: true, error: null, data: [] }
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload }
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] }

    default:
      return state
  }
}

export default reducer
