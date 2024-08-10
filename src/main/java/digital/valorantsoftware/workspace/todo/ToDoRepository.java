package digital.valorantsoftware.workspace.todo;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ToDoRepository extends JpaRepository<ToDo, Long> {

     @Autowired
   Optional<ToDo> findByIdAllIgnoreCase(Long id);

}
