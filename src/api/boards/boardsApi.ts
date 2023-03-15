import axios from "axios";
import { BoardDto } from "./dto/board.dto";
import { CardDto } from "./dto/card.dto";
import { ColumnDto } from "./dto/column.dto";

const url = process.env.REACT_APP_TS_BOARDS_API;
const token = localStorage.getItem("token");
let config = {
  headers: { Authorization: "Bearer " + token },
};

export class BoardsApi {
  public async getBoards() {
    return await axios.get<BoardDto[]>(`${url}/boards`, config);
  }

  public async getBoardWithContent(id: number) {
    return await axios.get<BoardDto[]>(`${url}/boards/${id}`, config);
  }

  public async addColumn(body: ColumnDto, id: number) {
    return await axios.post<ColumnDto>(
      `${url}/boards/${id}/columns`,
      {
        ...body,
      },
      config
    );
  }

  public async removeColumn(id: number) {
    return await axios.delete<ColumnDto>(`${url}/boards/columns/${id}`, config);
  }

  public async updateCard(card_id: number, body: CardDto) {
    return await axios.put<CardDto>(
      `${url}/boards/cards/${card_id}`,
      {
        ...body,
      },
      config
    );
  }

  public async createCard(id: number, body: CardDto) {
    return await axios.post<CardDto>(
      `${url}/boards/${id}/cards`,
      {
        ...body,
      },
      config
    );
  }

  public async removeCard(id: number) {
    return await axios.delete<ColumnDto>(`${url}/boards/cards/${id}`, config);
  }
}
