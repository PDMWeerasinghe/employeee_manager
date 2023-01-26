import React from 'react';
import { toggleViewMode } from '@/shared/redux/reducers/toolbarSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Toolbar as ToolbarComponent } from "@/shared/components"

const Toolbar = () => {
    const mode = useSelector(state => (state.viewMode.value));
    const dispatch = useDispatch()
    const handleViewModeChange = () => dispatch(toggleViewMode());

    return (<ToolbarComponent viewMode={mode} onViewModeChange={handleViewModeChange} />);
}

export default Toolbar;
