import React from "react";
import Layout from '@theme/Layout';
import '../css/colorPicker.css';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import "animate.css"
import TabItem from '@theme/TabItem';
import '../css/style.css';

function colorPickerPage(props) {
    return (
        <Layout title="WPF Color Picker">
            <div className="colorPicker">
                <div className="page-title">
                    <h2 className="animate__animated animate__fadeInDown animate__delay-1s">
                        A collection of WPF controls that let users choose colors in various ways.
                    </h2>
                    <img src="img/colorPicker.png" alt="screenshot" className="animate__animated animate__fadeInDown highlighted-img" />
                </div>
                <div className="usage">
                    <h3>Installation</h3>
                    <Tabs
                        defaultValue="PM"
                        values={[
                            { label: 'Package Manager', value: 'PM' },
                            { label: '.NET CLI', value: 'dotnet-cli' },
                        ]}>
                        <TabItem value="PM">
                            <CodeBlock className="language-powershell">
                            {"Install-Package PixiEditor.ColorPicker"}
                        </CodeBlock>
                        </TabItem>
                        <TabItem value="dotnet-cli">
                            <CodeBlock className="language-bash">
                                dotnet add package PixiEditor.ColorPicker
                            </CodeBlock>
                        </TabItem>
                    </Tabs>
                    <h3>Usage</h3>
                    <CodeBlock className="language-xml">
                        {`<Window
xmlns:colorpicker="clr-namespace:ColorPicker;assembly=ColorPicker">`} </CodeBlock>
                    <CodeBlock className="language-xml">
                        {`<colorpicker:StandardColorPicker x:Name="main" />
<colorpicker:PortableColorPicker ColorState="{Binding ElementName=main, Path=ColorState, Mode=TwoWay}"/>`}
                    </CodeBlock>
                </div>
                //TODO: GITHUB BUTTON}
                <h3 className="markdown" style={{textAlign: "center", marginBottom: 50}}>
                    Check out <a href="/docs/colorpicker">docs</a> for more
                </h3>
            </div>
        </Layout>
    )
}

export default colorPickerPage;