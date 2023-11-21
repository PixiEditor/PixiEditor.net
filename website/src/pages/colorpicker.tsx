import React, { useState } from "react";
import Layout from '@theme/Layout';
import '../css/colorPicker.css';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import "animate.css"
import TabItem from '@theme/TabItem';
import '../css/style.css';
import TogglePicker from "../components/togglePicker";

function colorpicker(props) {
    const [pickedOption, setPickedOption] = useState(0);

    const optionSelected = (option) => {
        console.log(option);
        setPickedOption(option);
    }

    return (
        <Layout title="AvaloniaUI/WPF Color Picker">
            <div className="colorPicker">
                <div className="page-title">
                    <h2 className="animate__animated animate__fadeInDown animate__delay-1s">
                        Likely the most customizable and advanced color picker for WPF and AvaloniaUI. <br/><a href="/ColorPickerDemo/" target="_blank" style={{color: "#c6283d"}}>Try in the browser</a>
                    </h2>
                    <a href="/ColorPickerDemo/" target="_blank">
                        <video muted autoPlay className="animate__animated animate__fadeInDown highlighted-img" src="/videos/colorpicker.mp4"/>
                    </a>
                </div>
                <div className="usage">
                    <h3>Installation</h3>
                  <TogglePicker label1="WPF" label2="AvaloniaUI" onOptionSelected={optionSelected}/>
                    <Tabs
                        defaultValue="PM"
                        values={[
                            { label: 'Package Manager', value: 'PM' },
                            { label: '.NET CLI', value: 'dotnet-cli' },
                        ]}>
                        <TabItem value="PM">
                            <CodeBlock className="language-powershell">
                            {pickedOption === 0 ? "Install-Package PixiEditor.ColorPicker" : "Install-Package PixiEditor.ColorPicker.AvaloniaUI"}
                        </CodeBlock>
                        </TabItem>
                        <TabItem value="dotnet-cli">
                            <CodeBlock className="language-bash">
                                {pickedOption === 0 ? "dotnet add package PixiEditor.ColorPicker" : "dotnet add package PixiEditor.ColorPicker.AvaloniaUI"}
                            </CodeBlock>
                        </TabItem>
                    </Tabs>
                    <h3>Usage</h3>
                    <CodeBlock className="language-xml">
                        {pickedOption === 0 ? `<Window
xmlns:colorpicker="clr-namespace:ColorPicker;assembly=ColorPicker">` : `<Window 
xmlns:colorpicker="clr-namespace:ColorPicker;assembly=ColorPicker.AvaloniaUI">`} </CodeBlock>
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
                <a href={pickedOption === 0 ? "https://www.nuget.org/packages/PixiEditor.ColorPicker" : "https://www.nuget.org/packages/PixiEditor.ColorPicker.AvaloniaUI"} target="_blank">
                    <div className="github-link">
                    <img src="/icons/nuget-logo.png" width="50"/>
                    <span>NuGet</span>
                    </div>
                </a>
                </div>
                <h3 className="markdown" style={{textAlign: "center", marginBottom: 50, marginTop: 25}}>
                    Check out <a href="/docs/color-picker" target="_blank">the docs</a> for more
                </h3>
            </div>
        </Layout>
    )
}

export default colorpicker;