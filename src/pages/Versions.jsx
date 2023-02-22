import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MyTechnologies from '../components/MyTechnologies/MyTechnologies';
import VersionHistory from '../components/VersionHistory/VersionHistory';
import { setPage } from '../redux/pageSlice';

const Versions = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPage('versions'));
    }, [dispatch]);

    return (
        <>
            <MyTechnologies />
            <VersionHistory />
        </>
    );
};

export default Versions;
