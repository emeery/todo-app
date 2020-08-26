import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs/internal/Observable';
import { Task } from '../model/task';
import { Subject } from 'rxjs';

const BACKEND_URL = environment.apiUrl + '/task/';
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private taskChanged = new Subject<Task[]>();
  constructor(private http: HttpClient) { }
  getUserListener() {
    return this.taskChanged.asObservable();
  }
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(BACKEND_URL)
  }
  getTask(id): Observable<Task> {
    return this.http.get<Task>(BACKEND_URL + id)
  }
  addTask(task: Task): Observable<Task> {
    task._id = null
    return this.http.post<Task>(BACKEND_URL, task)
  }
  editTask(task: Task): Observable<Task> {
  var id = task._id;
   return this.http.put<Task>(BACKEND_URL + id, task)
 }
  deleteTask(id: string): Observable<any> {
    return this.http.delete(BACKEND_URL + id)
  }
}
