import React, { Component } from 'react';
//import { Link } from '@reach/router';

class Welcome extends Component {
    render() {
        const { user } = this.props;
        return (
            <div>
                <span className="text-secondary font-weight-bold pl-1">
                    {user}
                </span>,
                <a href="/" className="font-weight-bold text-primary pl-1">log out</a>
            </div>
        );
    }
}

export default Welcome;

// class Welcome extends Component {
//   render() {
//     const { userName, logOutUser } = this.props;

//     return (
//       <div className="text-center mt-4">
//         <span className="text-secondary font-weight-bold pl-1">
//           Welcome {userName}
//         </span>
//         ,
//         <Link
//           to="/login"
//           className="font-weight-bold text-primary pl-1"
//           onClick={e => logOutUser(e)}
//         >
//           log out
//         </Link>
//       </div>
//     );
//   }
// }

// export default Welcome;
