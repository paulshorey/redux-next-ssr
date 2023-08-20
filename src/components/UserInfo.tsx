import React from 'react';
import {useSelector} from 'react-redux';

import type {TypedUseSelectorHook} from 'react-redux';

import {rootState} from '@/redux/store';
export const useTypedSelector: TypedUseSelectorHook<rootState> = useSelector;

function App() {
    // const dispatch = useDispatch();
    const {user} = useTypedSelector(state => state);

    return (
        <header className="px-6 py-3">
            {/* user status */}
            <div className="flex justify-between">
                <span>
                    {user.ip}&emsp; {user.city}, {user.country}
                    &emsp;
                    {user.isp}&emsp;
                </span>
                {/* <span
                    className="cursor-pointer"
                    // onClick={() => {
                    //   dispatch(toggleDarkMode());
                    // }}
                >
                    {ui.darkMode ? '🌚' : '🌞'}
                </span> */}
            </div>
        </header>
    );
}

export default App;
