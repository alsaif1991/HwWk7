import  express  from "express";
import { getbooks, getLoan, getuser ,addusers, addbook, addloan} from "../controller/book.controller";
import validate from "../middleware/validate";
import { bookSchema ,loanSchema,userSchema} from "../zodschema/manageschema";
const router = express.Router();


router.get('/user/:userid',validate(userSchema),getuser);
router.get('/book/:bookid',validate(bookSchema),getbooks);
router.get('/loan/:loanid',validate(loanSchema),getLoan);
router.post('/user',validate(userSchema), addusers);
router.post('/book',validate(bookSchema), addbook);
router.post('/loan',validate(loanSchema), addloan);



export default router ;