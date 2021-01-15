// Created by Muhammed Ebrahim

import { Button } from 'react-bootstrap'

const CommonButton = ({ text, style }) => {
    return <Button style={style} className="commonButton">{text}</Button>
}
 
export default CommonButton;