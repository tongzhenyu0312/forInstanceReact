import React, { Component } from 'react';

let renderCount = 0;

// 实验：在通用业务场景下，如何减少Heaer的render次数
// 以往的业务场景下，在cdu内进行数据的获取，多了一次render的过程（外界show的变更导致）
// 理念：由外界导致的组件更新，只针对show的变化，才做出真实的更新操作

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      isQuerying: false,
      info: '',
    };
  }

  /**
   * 优点：最新的props衍生 state的数据
   * 缺点：无法获取到组件实例，相当于大部分的数据都获取不到
   */
  // static getDerivedStateFromProps(nextProps) {
  //   const { pageShow: nextPageShow } = nextProps;
  //   const {} = 
  //   // 根据props更改 {isQuerying: true}
  // }

  
  // Mounting: updateDoms -> componentDidMount
  componentDidMount() {
    setTimeout(() => {
      this.setState({ info: '更新了一些其他数据' });
    }, 10000)
  }
  
  // Updating(new Props): getDerivedStateFromProps -> shouldComponentUpdate -> render
  // Updating(setState):  shouldComponentUpdate -> render
  shouldComponentUpdate(nextProps) {
    const { pageShow: nextPageShow } = nextProps;
    const { pageShow } = this.props;
    const shouldDoQuery = nextPageShow !== pageShow && nextPageShow;
    console.log("🚀 Logger:  - Header  - shouldComponentUpdate  - shouldDoQuery", shouldDoQuery);

    if (shouldDoQuery) {
      this.getData();
      return false;
    }
    return true;    
  }

  async getData() {
    await new Promise((resolve, reject) => {
      console.log("🚀 Logger:  - Header  - componentDidUpdate  - 开始获取数据", );
      setTimeout(() => {
        resolve();
      }, 2000)
    }).then(() => {
      console.log("🚀 Logger:  - Header  - componentDidUpdate  - 数据获取成功", );
      this.setState({ info: '接口获取的数据', isQuerying: false });
    })
  }

  // Updating: render -> getSnapshotBeforeUpdate -> update DOMs
  getSnapshotBeforeUpdate() {
    // 进行一些同步的计算操作
    return '';
  }

  // Updateing: updateDOM -> componentDidUpdate
  componentDidUpdate(prevProps) {
    // const { pageShow: prevPageShow } = prevProps;
    // const {pageShow} = this.props;
    // if (prevPageShow !== pageShow && pageShow ) {
    //   console.log("🚀 Logger:  - Header  - componentDidUpdate  - 开始获取数据", );
    //   setTimeout(() => {
    //     console.log("🚀 Logger:  - Header  - componentDidUpdate  - 数据获取成功", );
    //     this.setState({ info: '接口获取的数据' })
    //   }, 2000)
    // }
  }

  // Mounting: getDerivedStateFromProps -> render -> update DOMs
  // Updating: shouldComponentUpdate -> render -> componentDidUpdate
  render() {
    renderCount++;
    console.log('🚀 Logger:  - Header  - render计数', renderCount);

    return (
      <div>
        <div>Header</div>
        <div>{this.state.info}</div>
      </div>
    );
  }
}

Header.defaultProps = {
  pageShow: false,
};
