function Project(props) {
    return (
      <img className="ProjectImg"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
  
    );
  }