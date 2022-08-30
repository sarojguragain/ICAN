import {useEffect, useState} from 'react';
import {  Form, Input, Button, Checkbox, Avatar, Image, Alert, message } from 'antd';
import { UserOutlined, LockOutlined, CalendarOutlined } from '@ant-design/icons';
import IRDlogo from '../../../components/navigation/logo1.png';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {UpdateLogin, GetLogin} from '../../../redux/security/user/action';
import {useRouter} from 'next/router';


const Login =props =>{  
    const router =useRouter();
    const dispatch = useDispatch();
    const [stop, setStop] = useState(false);
    const login = useSelector(state => state.loginList.login, shallowEqual);
    const messages = useSelector(state => state.loginList.message, shallowEqual);
    const error = useSelector(state => state.loginList.error, shallowEqual);
    const success = useSelector(state => state.loginList.success, shallowEqual);

    const onChange= e=>{
        let keyValue = {};
        keyValue ['field'] = e.target.name;
        keyValue ['value'] = e.target.value;
        dispatch(UpdateLogin(keyValue));      
    }; 

    useEffect(() => {
        if(!!success && !stop){
            setStop(true);
            message.success(messages)
            router.push('/home');
        } 
    });

    const onSubmit = () => {
        dispatch(GetLogin(login)); 
    };
    return(
        <>   
            <header className="hdr-bg">
                <div style={{width:'50%'}}>
                    <Avatar src={IRDlogo} className="gov-logo"/>
                </div>
                <div className="miti">Welcome to Central Billing Monitoring System</div>

                {/* <Avatar size={50} src={<Image src={logo}/>} className="gov-logo"/> <h1> Central Billing Monitoring System</h1>*/}
            </header>
            
 
            <div className="box">
                <h2 className="login-avatar"> Login</h2>
                {/*<Avatar size={64} src={<Image src={logo}/>} className="login-avatar"/>*/}
                
                <Form
                    name="normal_login"
                    initialValues={{ remember: true }}
                    
                >
                  
                {error && message.error(messages)}
               
                    <Form.Item
                        name="LoginId"
                        rules={[{ required: true, message: 'Please input your Username!' }]}>
                        <Input 
                            prefix={<UserOutlined className="site-form-item-icon" />} 
                            name="LoginId"
                            placeholder="Username" 
                            onChange={onChange}/>
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}>
                        
                       
                        <Input.Password 
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            name="password"
                            placeholder="Password" 
                            onChange={onChange}
                        />
                        
                        
                    </Form.Item>

                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                        Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" onClick={onSubmit} className="login-form-button">
                        Log in
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <footer className="ftr-bg">
           Powered by PCS
            </footer>
           
        </>
    );
};

export default Login;