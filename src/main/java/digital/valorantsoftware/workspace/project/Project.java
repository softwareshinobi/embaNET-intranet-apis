package digital.valorantsoftware.workspace.project;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.NonNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Entity
@Table(name = "project")
public class Project {

    private static final Logger log = LoggerFactory.getLogger(Project.class);

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "intention")
    @NonNull
    private String intention;

    @Column(name = "name")
    @NonNull
    private String name;

    @Column(name = "description")
    @NonNull
    private String description;

    @Column(name = "creatorID")
    @NonNull
    private Integer creatorID;

    @Column(name = "implementorID")
    @NonNull
    private Integer implementorID;

    @Column(name = "managerID")
    @NonNull
    private Integer managerID;

    @Column(name = "calendar")
    @NonNull
    private String calendar;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getIntention() {
        return intention;
    }

    public void setIntention(String intention) {
        this.intention = intention;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getCreatorID() {
        return creatorID;
    }

    public void setCreatorID(Integer creatorID) {
        this.creatorID = creatorID;
    }

    public Integer getManagerID() {
        return managerID;
    }

    public void setManagerID(Integer managerID) {
        this.managerID = managerID;
    }

    public String getCalendar() {
        return calendar;
    }

    public void setCalendar(String calendar) {
        this.calendar = calendar;
    }

    public Integer getImplementorID() {
        return implementorID;
    }

    public void setImplementorID(Integer implementorID) {
        this.implementorID = implementorID;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Project{");
        sb.append("id=").append(id);
        sb.append(", intention=").append(intention);
        sb.append(", name=").append(name);
        sb.append(", description=").append(description);
        sb.append(", creatorID=").append(creatorID);
        sb.append(", implementorID=").append(implementorID);
        sb.append(", managerID=").append(managerID);
        sb.append(", calendar=").append(calendar);
        sb.append('}');
        return sb.toString();
    }

}
