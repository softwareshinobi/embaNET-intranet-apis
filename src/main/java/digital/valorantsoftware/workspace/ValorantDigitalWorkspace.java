package digital.valorantsoftware.workspace;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ValorantDigitalWorkspace {
  @Override
  public void run(ApplicationArguments args) throws Exception {
    System.in.read();
  }
    public static void main(final String[] commandLineArguments) {

        SpringApplication.run(ValorantDigitalWorkspace.class, commandLineArguments);

    }

}
