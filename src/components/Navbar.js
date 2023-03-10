import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const { authenticate, id } = useSelector((state) => state.auth);
  const menuList = ["여성", "남성", "백", "리네아 로사", "PRADASPHERE"];
  const navigate = useNavigate();
  const goToLogin = () => {
    authenticate ? dispatch({ type: "LOGOUT" }) : navigate("/login");
  };
  const search = (e) => {
    if (e.key === "Enter") {
      navigate(`/?q=${e.target.value}`);
    }
  };
  const goToHome = () => {
    navigate("/");
  };
  return (
    <div>
      <LoginButton onClick={goToLogin}>
        {authenticate ? <Stdiv>{id} 님 </Stdiv> : null}
        <FontAwesomeIcon icon={faUser} />
        <div>{authenticate ? "로그아웃" : "로그인"}</div>
      </LoginButton>
      <NavSection onClick={goToHome}>
        <img
          width={200}
          alt="프라다"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Prada-Logo.svg/1280px-Prada-Logo.svg.png"
        />
      </NavSection>
      <MenuSection>
        <MenuList>
          {menuList.map((el, i) => (
            <StLi key={`menuList-${i}`}>{el}</StLi>
          ))}
        </MenuList>
        <SearchBox>
          <FontAwesomeIcon icon={faSearch} />
          <SearchInput onKeyPress={search} type="text" />
        </SearchBox>
      </MenuSection>
    </div>
  );
};

const Stdiv = styled.div`
  margin-right: 10px;
`;
const NavSection = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  cursor: pointer;
`;
const LoginButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 25px;
  cursor: pointer;
  & > div {
    margin-left: 5px;
  }
`;
const MenuList = styled.ul`
  display: flex;

  list-style-type: none;
`;
const StLi = styled.li`
  padding: 10px;
`;
const MenuSection = styled.div`
  display: flex;
  justify-content: center;
`;
const SearchBox = styled.div`
  position: absolute;
  right: 20px;
  padding: 5px;
  @media only screen and (max-width: 880px) {
    left: 0px;
    top: 0px;
  }
`;
const SearchInput = styled.input`
  margin-left: 5px;
  border: 1px solid black;
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  border-bottom-width: 1;

  &:focus {
    outline: none;
  }
`;

export default Navbar;
