import React from 'react'
import Clients from './Clients'
import WebDeveloper from '../../Assets/WebDeveloper.png'
import AndroidDeveloper from '../../Assets/AndroidDeveloper.png'
import UIUXDesigner from '../../Assets/UIUXDesigner.png'
import FullStackDeveloper from '../../Assets/FullStackDeveloper.png'

function ClientsItems() {
    return (
        <div className='w-full md:flex lg:flex flex-wrap xl:flex-nowrap gap-5 justify-between'>
            <Clients
                isImage={WebDeveloper}
                myself="Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar pro."
                isName="Celia Almeda"
                title="Web Developer"
            />
            <Clients
                isImage={AndroidDeveloper}
                myself="Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar pro."
                isName="Nat Reynolds"
                title="Android Developer"
            />
            <Clients
                isImage={UIUXDesigner}
                myself="Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar pro."
                isName="Bob Roberts"
                title="UI/UX Designer"
            />
            <Clients
                isImage={FullStackDeveloper}
                myself="Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar pro."
                isName=" Mattie Smith"
                title="Full Stack Developer"
            />
        </div>
    )
}

export default ClientsItems