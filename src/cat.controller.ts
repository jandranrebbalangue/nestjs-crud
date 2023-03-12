/* eslint-disable prettier/prettier */
import { Body, Controller, Get, HttpCode, Param, Post } from "@nestjs/common";
import { CreateCatDto } from "dto/create-cat.dto";
import { Cat } from "../interfaces/cat.interface";
import { CatsService } from "./cat.service";

@Controller("cats")
export class CatsController {
  constructor(private catsService: CatsService) { }
  @Post()
  @HttpCode(204)
  async create(@Body() createCatDto: CreateCatDto): Promise<void> {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(":id")
  findOne(@Param() params: { id: any }): string {
    console.log(params.id);
    return `This acrtion returns a #${params.id} cat`;
  }
}
