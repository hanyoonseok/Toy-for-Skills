import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { loadPlayer, addPlayer, deletePlayer } from '../modules/player';
import { useCallback } from 'react';
import { ADD_PLAYER } from '../constants';

export default function useScore() {
  const { players } = useSelector((state: RootState) => state.player);
  const dispatch = useDispatch();

  const onLoadPlayer = useCallback(() => dispatch(loadPlayer()), [dispatch]);
  const onAddPlayer = useCallback(
    (nickname, age, id) => () => {
      const data = {
        nickname,
        age,
        id,
      };
      dispatch(addPlayer(data));
    },
    [dispatch]
  );
  const onDeletePlayer = useCallback(
    (deleteId) => () => dispatch(deletePlayer(deleteId)),
    [dispatch]
  );

  return { players, onLoadPlayer, onAddPlayer, onDeletePlayer };
}
