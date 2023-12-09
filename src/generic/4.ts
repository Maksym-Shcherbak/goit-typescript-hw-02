/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T> {
  constructor(public props: T) {}
}

interface Page extends Component {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
