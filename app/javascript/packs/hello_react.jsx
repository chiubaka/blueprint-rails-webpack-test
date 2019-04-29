// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import { Button, Popover } from "@blueprintjs/core";
import React from 'react'
import ReactDOM from 'react-dom'

import "@blueprintjs/core/lib/css/blueprint.css";

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div>
      <Popover portalContainer={document.body}>
        <Button text="Working" />
        <div>
          Test!
        </div>
      </Popover>
      <Popover>
        <Button text="Broken" />
        <div>
          Test!
        </div>
      </Popover>
    </div>,
    document.body.appendChild(document.createElement('div')),
  )
})
