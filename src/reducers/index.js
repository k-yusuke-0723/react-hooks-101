import { CREATE_EVENT, DELETE_EVENT, DELETE_ALL_EVENT } from '../actions';

const events = (state = [], action) => {
  switch(action.type) {
    case CREATE_EVENT:
      const event = { title: action.title, body: action.body };
      const length = state.length;

      // 0じゃない場合は、「length」から-1する事で最後のIDを取得することができる？
      const id = length === 0 ? 1 : state[length - 1].id + 1;

      return [...state, { id, ...event }];
    case DELETE_EVENT:
      // actionから渡ってくるIDと等しくないものをfilter（配列化）してreturnする
      return state.filter(event => event.id !== action.id);
    case DELETE_ALL_EVENT:
      return []
    default:
      return state
  }
}

export default events;