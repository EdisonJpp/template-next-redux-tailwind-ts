Folder Structure Nextjs app
============================

> Folder structure in nextjs, with integrated technologies like redux/toolkit, tailwind, sass

### A typical directory layout

    .
    ├── components        # components    
	├── lib                 # lib
    ├── pages                 # pages
    ├── public                 # statics
    ├── styles                 # styles
    ├── LICENSE
    └── README.md

> Use short lowercase names at least for the top-level files and folders except
> `LICENSE`, `README.md`

### Components

Reusable components are usually placed in the `components` folder

> **Q: How will we split the components within the components folder?**

> **A:** We'll break them down by `entity name`, `ui`, and `common`


#####  UI: ( common common is the same, the only thing inside that has a header, body, footer, navbar, etc..  )

    ├── ...
    ├── ui       # Modal, Button, Text, etc...
    │    ├── index.ts   # Export all the components that are inside
    │    ├── Button    # Component name
    │          └── index.tsx   # Export default button component
    │          └── Button.tsx  # Button component 
    │          └── Button.module.sass  # Button component styles
    └── ...


##### Entity name: 

    ├── ...
    ├── user       # all components that belong to user
	│   ├── index.ts              # Export all the components that are inside
    │   ├── UserCard.              # Component name
    │           └── index.tsx   # Export default button component
    │           └── UserCard.tsx  # UserCard component 
    │           └── UserCard.module.sass  # UserCard component styles
    └── ...
