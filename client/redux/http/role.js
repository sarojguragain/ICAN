import axios from "axios";
import {base_url} from "./_config";

export const httpGetRoles = ()=>axios.get(base_url+`/roles`)