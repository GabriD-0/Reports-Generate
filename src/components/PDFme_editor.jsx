import React, { useEffect, useRef, useState } from 'react'; 
import { Designer } from '@pdfme/ui';
import { text, image, barcodes, line, rectangle, ellipse, svg, table } from "@pdfme/schemas";



export default function PDFme_editor() {
    

    useEffect(() => {
        const domContainer = document.getElementById('designer-container');
        if (domContainer) {
            const template = {
                
                basePdf: {
                    width: 210,
                    height: 297,
                    padding: [10, 10, 10, 10]
                },

                "schemas": [
                    [
                        {
                            "name": "name",
                            "type": "text",
                            "content": "Pet Name",
                            "position": {
                                "x": 10.51,
                                "y": 10.51
                            },
                            "width": 77.77,
                            "height": 18.7,
                            "fontSize": 36,
                            "fontColor": "#14b351"
                        },
                        {
                            "line": "line",
                            "color": "#000000",
                            "position": {
                                "x": 10,
                                "y": 256.27
                            },
                            "width": 189.96,
                            "height": 1.53
                            
                        },
                        {
                            "name": "age",
                            "type": "text",
                            "content": "4 years",
                            "position": {
                                "x": 10,
                                "y": 262.01
                            },
                            "width": 43.38,
                            "height": 6.12,
                            "fontSize": 12
                        },
                        {
                            "name": "sex",
                            "type": "text",
                            "content": "Male",
                            "position": {
                                "x": 10,
                                "y": 268.01
                            },
                            "width": 43.38,
                            "height": 6.12,
                            "fontSize": 12
                        },
                        {
                            "name": "weight",
                            "type": "text",
                            "content": "33 pounds",
                            "position": {
                                "x": 10,
                                "y": 275.01
                            },
                            "width": 43.38,
                            "height": 6.12,
                            "fontSize": 12
                        },
                        {
                            "name": "breed",
                            "type": "text",
                            "content": "Mutt",
                            "position": {
                                "x": 10,
                                "y": 280.01
                            },
                            "width": 43.38,
                            "height": 6.12,
                            "fontSize": 12
                        },
                        {
                            "line": {
                                "color": "#000000",
                                "position": {
                                    "x": 10,
                                    "y": 29.92
                                },
                                "width": 189.96,
                                "height": 1.53
                            }
                        }
                    
                    ]
                ],
                
            };
        }
        const plugins = {
            text,
            image,
            rectangle,
            ellipse,
            svg,
            line,
            barcode: barcodes.code128,
            qrcode: barcodes.qrcode,
            Table: table
        };

        const designer = new Designer({
            domContainer,
            options: {
                lang: 'en',
                labels: {
                    fieldList: 'Fields',   
                }
            },
            plugins,
        });
       
    }, []);

    return <div id="designer-container" style={{width: '100vw', height: '100vh' }}></div>
    
}

