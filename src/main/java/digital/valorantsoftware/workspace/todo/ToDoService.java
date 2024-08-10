package digital.valorantsoftware.workspace.todo;

import jakarta.transaction.Transactional;
import java.sql.SQLException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional(rollbackOn = {SQLException.class})
public class ToDoService {

      @Autowired
  ToDoRepository toDoRepository;

    @Autowired
    public ToDoService(ToDoRepository projectRepository) {

        this.toDoRepository = projectRepository;

    }

    public ToDo save(ToDo project) {

        return this.toDoRepository.save(project);

    }

    public List<ToDo> findAll() {

        return this.toDoRepository.findAll();

    }

    public ToDo findById(Long id) {

        return this.toDoRepository.findById(id).orElse(null);

    }

    public void delete(Long id) {

        this.toDoRepository.deleteById(id);

    }

}
