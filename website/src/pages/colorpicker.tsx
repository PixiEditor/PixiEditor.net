import React from "react";
import Layout from '@theme/Layout';
import '../css/colorPicker.css';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import "animate.css"
import TabItem from '@theme/TabItem';
import '../css/style.css';

function colorpicker(props) {
    return (
        <Layout title="WPF Color Picker">
            <div className="colorPicker">
                <div className="page-title">
                    <h2 className="animate__animated animate__fadeInDown animate__delay-1s">
                        The most customizable and advanced color picker for WPF.    
                    </h2>
                    <img src="/img/colorPicker.png" alt="screenshot" className="animate__animated animate__fadeInDown highlighted-img" />
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
                <div className="buttons">
                <a href="https://github.com/PixiEditor/ColorPicker" target="_blank">
                    <div className="github-link">
                    <img src="/icons/github.svg" width="50"/>
                    <span>GitHub</span>
                    </div>
                </a>
                <a href="https://www.nuget.org/packages/PixiEditor.ColorPicker" target="_blank">
                    <div className="github-link">
                    <img src="/icons/nuget-logo.png" width="50"/>
                    <span>NuGet</span>
                    </div>
                </a>
                </div>
                <h3 className="markdown" style={{textAlign: "center", marginBottom: 50, marginTop: 25}}>
                    Check out <a href="/docs/color-picker" target="_blank">the docs</a> for more
                </h3>

                <div className="companies-using-section">
                    <h2>Companies using our Color Picker</h2>
                    <div className="company-container">
                        <a href="https://icons8.com/app/windows" target="_blank">
                        <img src="/icons/Icons8_logo_full.png" width="250" alt="icons8 logo" />
                        <div className="product-name">Pichon for Windows</div>
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default colorpicker;