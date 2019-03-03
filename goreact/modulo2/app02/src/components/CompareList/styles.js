import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
`;

export const Repository = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 0 10px;

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 64px;
    }

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #666;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(2n -1) {
        background: #f5f5f5;
      }
    }
  }
  .options {
    padding: 20px;

    button {
      width: 100%;
      height: 40px;
      color: #fff;
      border: 0;
      font-size: 14px;
      font-weight: bold;
      border-radius: 3px;
      cursor: pointer;
      margin: 5px 0;

      &.update-repository {
        background: #3b8c89;

        &:hover {
          background: #58b3b0;
        }
      }
      &.remove-repository {
        background: #d83c3c;

        &:hover {
          background: #f35757;
        }
      }
    }
  }
`;
