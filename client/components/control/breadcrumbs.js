import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';

const Breadcrumbs = (props) => {
    return (
        <>
            {props.sub == 'list' && (
                <Breadcrumb className="breadcrumbs" >
                    <Breadcrumb.Item href="#">
                        <HomeOutlined />
                        <Link href="/home">
                            <span>Home</span>
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>{props.list}</Breadcrumb.Item>
                </Breadcrumb>
            )}

            {props.sub == 'main' && (
                <Breadcrumb className="breadcrumbs">
                    <Breadcrumb.Item href="#">
                        <HomeOutlined />
                        <Link href="/home">
                            <span>Home</span>
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#">
                        <UserOutlined />
                        <Link href={props.link}>
                            <span>{props.list}</span>
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>{props.main}</Breadcrumb.Item>
                </Breadcrumb>
            )}
        </>
    );
};

export default Breadcrumbs;
