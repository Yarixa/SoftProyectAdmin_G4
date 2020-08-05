import React, {useEffect, useState} from 'react';
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { makeStyles, CardHeader } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card'
import CardContent  from "@material-ui/core/CardContent";

export default function Editor(){
    const [editorData, setEditorData] = useState('asdfa')
    const handleAutoSave = (arg)=>{
        console.log("auto saving !!" + arg);
    }

    const handleOnChange = (event, editor)=>{
        console.log(editor.getData())
        setEditorData(editor.getData())
    }

    const editorConfig = {
        autosave: handleAutoSave,
        removePlugins: [ 'MediaEmbed', 'insert', 'Table'],
        extraPlugin : 'autogrow, print,format,font,colorbutton,justify, uploadimage',
        ckfinder : {
            uploadUrl : '/'
        }
    }


    return (
        <div>
            <Card>
                <CardContent>
                    <CKEditor
                        editor = {ClassicEditor}
                        config ={editorConfig}
                        onChange = {handleOnChange}
                        />
                </CardContent>

                data = "<p>Ingresar Dato</p>"
                <Button type="submit">Agregar</Button>

            </Card>
        </div>
    );
}