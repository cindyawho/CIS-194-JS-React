// While we could keep Todo declared in this file, it’s going to be used throughout the app. 
// We can either export it here and import it everywhere else we need it throughout the app, 
// or we can create a type declaration file. Let’s call this types.d.ts and put it in our src folder. 
// What’s nice about a *.d.ts file is our compiler will recognize the types in there as global to the 
// project and we won’t need to explicitly import or export them.

interface Todo {
    text: string;
    complete: boolean;
}

// That’s because toggleTodo was not an expected prop for our TodoListItem. Let’s add it as an expected prop. While we’re at it, let’s declare a ToggleTodo type in our types.d.ts file:
type ToggleTodo = (selectedTodo : Todo) => void;