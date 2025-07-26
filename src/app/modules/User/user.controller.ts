import { Request, Response } from 'express';
import { userService } from './user.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';

const registerUser = catchAsync(async (req: Request, res: Response) => {
  const result = await userService.registerUser(req);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully!',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await userService.getAllUserFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User data fetched!',
    data: result,
  });
});

export const userController = {
  registerUser,
  getAllFromDB,
};
