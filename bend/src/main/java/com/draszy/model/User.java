package com.draszy.model;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Created by draszy1 on 23.02.2017.
 */
@Document
@Data
public class User {
    String name;
}
