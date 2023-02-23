import React, {useCallback, useEffect, useState} from 'react';
import styles from '../styles/Controls.module.css';
import {Button} from "@mui/material";

export default function Controls() {
    const [items, setItems] = useState([]);
    const triggerPreButtonHandler = useCallback(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/rental-entities/read`, {
            method: 'POST',
            body: JSON.stringify({"url": "http://206.189.197.77:9070/mock-data/pre"}),
            headers: {
                'Content-Type': 'application/json',
                API_KEY: `${process.env.NEXT_PUBLIC_API_KEY}`,
            },
        }).then(r => {
            if (r.ok) alert('Process started');
        });
    }, []);
    const triggerPostButtonHandler = useCallback(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/rental-entities/read`, {
            method: 'POST',
            body: JSON.stringify({"url": "http://206.189.197.77:9070/mock-data/post"}),
            headers: {
                'Content-Type': 'application/json',
                API_KEY: `${process.env.NEXT_PUBLIC_API_KEY}`,
            },
        }).then(r => {
            if (r.ok) alert('Process started');
        });
    }, []);
    const fetchData = useCallback(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/rental-entities`, {
            headers: {
                'Content-Type': 'application/json',
                API_KEY: `${process.env.NEXT_PUBLIC_API_KEY}`,
            },
        }).then(r => {
            r.json().then((item) => {
                console.log(item)
                if (item) setItems(item);
            })
        });
    }, [setItems]);
    useEffect(() => {
        let interval = setInterval(() => fetchData(), (1000 * 5))
        return () => clearInterval(interval);
    });

    return (
        <>
            <main>
                <div>Data Digestor Controls</div>
                <div className={styles.separatingDivs}>
                    <Button variant={'contained'} onClick={triggerPreButtonHandler}>
                        Trigger Pre-Update Data Fetching.
                    </Button>
                </div>
                <div className={styles.separatingDivs}>
                    <Button variant={'contained'} onClick={triggerPostButtonHandler}>
                        Trigger Post-Update Data Fetching.
                    </Button>
                </div>
                <div>
                    Progress:
                    {items.map(item => (
                        <div>
                            Processed permit: {item['permit']}
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}
