import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { makeSelectCurrencies } from './selectors';
/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  // const username = yield select(makeSelectUsername());
  // const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
  const url = 'http://data.fixer.io/api/latest?access_key=3aaa40824b81223980e5657a48e8ad23&format=1';

  const state = yield select(makeSelectCurrencies());
  console.log('what', state);

  try {
    // Call our request helper (see 'utils/request')

    const res = yield call(request, url);
    // yield put(reposLoaded(repos, username));

    console.log('sssup', res);
    yield put({ type: 'SET_CUNRRENCIES', payload: {response: res}});
  } catch (err) {
      console.log('uy whaats up');
    // yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest('GET_SOMETHING', getRepos);
}
